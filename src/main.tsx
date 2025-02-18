import { Check, Home } from 'google-material-icons/outlined'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './Assets/css/Shared.css'
import {
    ActionLoader,
    Badge,
    Breadcrumbs,
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Sheet,
    SheetBody,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    Stack,
    Switch,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    toast,
} from './Components'
import { Button } from './Components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './Components/ui/tooltip'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
    email: z
        .string({
            required_error: 'Please select an email to display.',
        })
        .email(),
})

const App = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }
    return (
        <Stack direction={'col'} className="p-space-06">
            <ActionLoader />
            <h1 className="shadow-md">Tetco Design System</h1>
            <Stack className="p-space-03">
                <Button variant={'text'} size={'sm'} colors={'primary'}>
                    <Check />
                    <span>Button</span>
                    <Check />
                </Button>
                <Button variant={'text'} size={'sm'} colors={'error'}>
                    <Check />
                    <span>Button</span>
                    <Check />
                </Button>
                <Button variant={'text'} size={'sm'} colors={'oncolor'}>
                    <Check />
                    <span>Button</span>
                    <Check />
                </Button>
                <Button variant={'text'} size={'sm'} colors={'neutral'}>
                    <Check />
                    <span>Button</span>
                    <Check />
                </Button>
            </Stack>

            <Breadcrumbs
                items={[
                    { path: 'dsdssfsd', title: 'sdfds' },
                    { render: <p>dsdfdsfsdfs</p>, title: 'sdfds' },
                    { render: <p>dsdfdsfsdfs</p>, title: 'sdfds' },
                    { render: <p>dsdfdsfsdfs</p>, title: 'sdfds' },
                    { render: <p>dsdfdsfsdfs</p>, title: 'sdfds' },
                    { render: <p>dsdfdsfsdfs</p>, title: 'sdfds' },
                ]}
            />

            <Stack className="p-space-03">
                <Badge variant={'ghost'} size={'xs'} colors={'gray'}>
                    <Check />
                    <span>Badge</span>
                    <Check />
                </Badge>
            </Stack>
            <Switch disabled />

            <Tabs dir={'ltr'} defaultValue="tab1" className="w-[400px]">
                <TabsList variant={'underline'} breakpoints={{ 768: 3, 1024: 4 }}>
                    <TabsTrigger value="tab1">
                        <Home />
                        tab1
                    </TabsTrigger>
                    <TabsTrigger value="tab2">
                        <Home />
                        tab2
                    </TabsTrigger>
                    <TabsTrigger value="tab3">
                        <Home />
                        tab3
                    </TabsTrigger>
                    <TabsTrigger value="tab4">
                        <Home />
                        tab4
                    </TabsTrigger>
                    <TabsTrigger value="tab5">
                        <Home />
                        tab5
                    </TabsTrigger>
                    <TabsTrigger value="tab6">
                        <Home />
                        tab6
                    </TabsTrigger>
                    <TabsTrigger value="tab7">
                        <Home />
                        tab7
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">...</TabsContent>
                <TabsContent value="tab2">...</TabsContent>
                <TabsContent value="tab3">...</TabsContent>
                <TabsContent value="tab4">...</TabsContent>
                <TabsContent value="tab5">...</TabsContent>
                <TabsContent value="tab6">... tab6</TabsContent>
                <TabsContent value="tab7">...</TabsContent>
            </Tabs>

            <div className="mt-space-05 p-space-06">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline">Hover</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <span>Add to library</span>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <Sheet>
                    <SheetTrigger>Open</SheetTrigger>
                    <SheetContent hideOverlay>
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                        </SheetHeader>
                        <SheetBody>
                            <SheetDescription>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deleniti quibusdam sed voluptatibus obcaecati
                                nesciunt animi qui, pariatur omnis amet non commodi perferendis voluptatem possimus eveniet autem voluptate explicabo
                                soluta! Fugit nesciunt, cupiditate unde qui illo ullam totam voluptatum sed modi delectus enim eveniet possimus saepe
                                libero hic, sequi velit soluta similique consequuntur quasi vero quas ut sapiente illum! Assumenda. Omnis blanditiis
                                voluptatibus magnam voluptatum totam aliquam distinctio, et laudantium iusto quod nostrum odio similique soluta
                                explicabo maxime sed sit perferendis quam deserunt facere, ex, eius architecto magni minima. Tenetur. Amet, dolore
                                quas facilis qui veritatis impedit harum quos rem natus provident? Cum blanditiis perspiciatis quisquam accusantium
                                hic nulla explicabo nihil nemo vitae animi ipsum in, rem suscipit debitis aliquam? Totam velit delectus impedit
                                placeat vel excepturi aspernatur ipsa amet asperiores fuga eveniet maxime laboriosam quos consequatur sequi, eum harum
                                rem debitis aliquam libero officiis unde. Voluptatibus odio incidunt aliquid? Totam tenetur ad nihil ab quibusdam
                                animi sed consectetur. Ullam laudantium maxime culpa sed enim dolorum veritatis esse nulla, debitis eius et, eligendi
                                eos iusto? Quibusdam illo nihil fugit soluta. Voluptatibus facere eum impedit voluptatum hic, similique molestiae
                                repudiandae laudantium iure culpa illum iste architecto modi beatae cum quos id repellendus tempora eligendi
                                laboriosam! Maxime debitis quidem ipsa quam deleniti. Optio eum, facere quod id molestias dolorum sapiente? Ex et
                                officia quae id similique itaque veritatis! Cumque dolor necessitatibus sint, perspiciatis reprehenderit, eligendi
                                quas est vero, voluptatibus alias nisi impedit? Quas impedit tempora doloremque beatae iste cumque possimus, eaque
                                officia quia omnis, maxime rem esse deleniti. Similique molestiae rerum fugit quae eaque! Saepe, ipsum hic error id
                                deleniti placeat sint! Nam exercitationem at voluptate. Error ullam sit vero aut cum provident mollitia asperiores
                                veritatis molestiae natus eos aspernatur, sapiente perspiciatis reiciendis repellat voluptates nesciunt possimus porro
                                rem facere voluptate ducimus! Porro doloremque aspernatur quaerat dolorum saepe dolore nobis id exercitationem quos
                                repudiandae. Accusamus impedit a nam voluptatibus. Culpa labore omnis ducimus corporis atque velit reprehenderit
                                laborum, dolores alias nobis minus? Accusamus debitis iure, est quae delectus atque perspiciatis sequi, nobis tempore
                                pariatur unde, quia dolorem rerum nam aut eum voluptatem dolorum perferendis suscipit sed quos at architecto culpa
                                numquam. Hic. Delectus, accusantium neque? Animi, dolore nihil molestias dignissimos inventore totam reprehenderit
                                consequuntur odit, nemo ipsum aut deserunt quam accusantium quas fugit sed reiciendis laudantium cupiditate facere
                                rerum numquam? Deserunt, inventore. Neque, eius eaque dolores dolorem porro dolor, molestiae saepe molestias optio
                                deleniti id repudiandae in ratione natus fuga beatae, sequi necessitatibus minus nostrum perferendis. Dignissimos
                                sapiente ullam accusantium qui unde. Minus labore delectus amet cum officia hic, quo eveniet maxime eligendi? Earum
                                fugiat corrupti id consectetur beatae alias voluptates vitae numquam, amet error ipsam tempore quae ipsum placeat
                                officia ex? Alias ipsum expedita mollitia obcaecati reiciendis id quasi, magni nisi harum, sint iste, ipsam cum.
                                Corporis, debitis illum in consectetur, laboriosam quos dignissimos minus architecto rem, sit at facere dolorum? Illum
                                repudiandae quas nam alias suscipit non, reprehenderit culpa aperiam numquam sapiente unde quibusdam eum voluptate
                                fugit nemo, sequi magni doloremque. Ipsam nostrum autem quaerat molestiae nulla laudantium! Maiores, quae? Itaque
                                natus fugit minus, ipsum nihil numquam laborum fuga id placeat eos, obcaecati, pariatur neque sunt error! Labore, a
                                recusandae veritatis iste, veniam suscipit, commodi distinctio doloribus ab esse consequuntur! Sit dolore eos
                                perferendis delectus officia neque sed voluptate deleniti, quod amet ad repudiandae blanditiis nesciunt
                                necessitatibus. Deserunt a ullam in adipisci sint nulla, quasi vero? Perferendis laborum est necessitatibus.
                                Necessitatibus nisi pariatur totam fugiat velit repudiandae eum nam, quibusdam quisquam sapiente ab enim dolorem vero
                                dolorum omnis numquam quas voluptas magnam. Libero laudantium architecto accusantium similique maxime rem
                                necessitatibus? Quo quis eaque esse soluta id. Quos sit voluptate doloribus. Necessitatibus inventore placeat
                                doloremque perspiciatis voluptates, aperiam repudiandae vitae atque id architecto eius dolorem aliquid aliquam
                                officiis. Facilis, quas saepe. Quaerat possimus modi sequi sint amet ipsa similique. Iure, neque eveniet. Facere
                                voluptatibus reiciendis quae vitae voluptates provident veritatis rem ducimus aspernatur consequuntur vero ab
                                suscipit, labore, quasi facilis accusantium! Eos suscipit harum incidunt maxime nemo, dolor nostrum unde cumque natus
                                quos iure accusamus iusto nobis adipisci quasi assumenda quas quidem? Unde delectus nesciunt laborum totam minima
                                assumenda animi aut? Doloribus qui ut odit iusto eveniet facilis provident illum exercitationem consectetur suscipit
                                perferendis minima tempore voluptas, ea iste numquam! Praesentium accusantium natus similique sapiente voluptates.
                                Iusto eaque harum debitis nesciunt! Nemo, quisquam, quaerat iure eos nisi amet officiis aliquam velit facere veritatis
                                nulla, fugit aut incidunt maxime optio? Iure non, est animi accusamus accusantium adipisci velit ratione optio
                                incidunt vitae? Unde eligendi numquam ea illum, dolor totam voluptatibus qui esse. Sequi necessitatibus eius
                                perspiciatis magnam consequatur commodi quidem odit hic aliquid amet! Mollitia, tempora porro. Quibusdam magni tempore
                                incidunt quas? Distinctio quidem dolores corrupti nemo sint ullam explicabo tempora at nulla numquam velit quae iste
                                facilis sapiente esse necessitatibus iusto deserunt enim, rerum impedit? Provident hic laudantium qui officiis et!
                                Cumque ullam voluptates non amet consequuntur sunt dolorum aperiam beatae perferendis enim quod repellendus
                                exercitationem, nemo repudiandae ut labore, veniam tempora explicabo officia fugiat consequatur corrupti fuga aliquam.
                                Hic, culpa. Et ipsa enim quidem facere vel delectus ipsam! Odit ea nam in molestiae sit quibusdam aut illo iusto
                                quaerat corrupti, fuga repellat facere saepe, provident vel veniam. Aliquid, asperiores rem? Quia nobis dolores
                                dignissimos repellat cupiditate iusto, velit maiores dolor illo aut pariatur, voluptas accusantium sunt blanditiis
                                consequuntur facere. Mollitia officia accusamus nulla, laboriosam ipsum quidem aut aperiam in quisquam? Itaque
                                perspiciatis eius aut assumenda dignissimos officiis placeat quod nisi doloribus rem commodi ea sequi, repellat
                                adipisci aspernatur blanditiis deleniti et quasi suscipit, incidunt obcaecati asperiores. Aperiam qui quas nulla!
                                Animi dolorum labore minima veniam consequatur incidunt nesciunt quaerat sequi ipsum nulla distinctio saepe dolor odit
                                eum perspiciatis in, deserunt facere fugiat laboriosam cumque rerum. Provident laborum dolore ipsam maxime. Reiciendis
                                tempora nihil temporibus enim sequi harum quidem. Dolor quae ratione eos perferendis nulla fugit laboriosam, repellat
                                error ab nobis maiores. Debitis ex ducimus at animi, qui praesentium dignissimos ad? Perspiciatis quia tempora
                                accusantium iure, non velit ipsam. Fugit in, neque aspernatur optio quas soluta facilis ea aut autem ullam. Quis ea
                                aperiam et dolorem sint suscipit? Veritatis, ullam? Ipsa. Ducimus exercitationem, laudantium officia unde, natus
                                adipisci labore temporibus dolorem obcaecati excepturi repellendus voluptatum quas quam. Fugit, magnam quasi rem
                                pariatur eveniet blanditiis vero est deserunt ipsam, asperiores non officia. Dolore ipsa, repellat odit error iusto
                                adipisci nihil magnam praesentium temporibus eius aspernatur incidunt inventore repellendus? Ipsum unde dicta id
                                aperiam, officiis a! Tempore dignissimos non eaque, harum incidunt nam. Facere beatae optio dolore adipisci animi
                                saepe magnam sequi in odit doloribus! Nulla quibusdam natus, eaque mollitia necessitatibus dolore voluptas, quia
                                possimus architecto tenetur esse aut aspernatur laudantium provident! Nobis! Minus et id provident expedita quo
                                cupiditate consequatur, itaque facere deserunt ea aperiam! Quos eaque aliquam quidem nihil, explicabo inventore error
                                similique quasi facilis, cumque tenetur fugit cum minus ipsam? Provident nemo, eveniet quas laudantium possimus ad
                                voluptates quia sed reiciendis debitis nobis ea in impedit veritatis aspernatur, est, odio perspiciatis similique
                                praesentium consectetur molestias quod quos maxime porro. Fuga? Amet quidem possimus nostrum, tempore dicta
                                dignissimos explicabo, eveniet ducimus fuga at non ab. Recusandae harum, nulla itaque porro nam dignissimos deleniti
                                numquam est, ipsa laborum voluptate sint necessitatibus placeat! Quam voluptas laboriosam expedita, eligendi aut quo
                                deleniti labore nostrum quaerat omnis ad ratione rem, doloribus assumenda quasi. Ut sit optio repellat modi velit
                                dignissimos a omnis aperiam doloribus accusantium? Consequatur unde reprehenderit quaerat aut inventore impedit
                                provident ipsa. Numquam nesciunt cumque dolorum incidunt cupiditate omnis! Sequi, iure dicta eos ullam suscipit
                                eveniet tempora nostrum fugit officiis beatae libero reiciendis? Ipsum dignissimos incidunt corrupti vero, harum totam
                                quis veniam provident obcaecati. Nesciunt error placeat, a alias rerum cum, ab deserunt accusamus, numquam similique
                                iusto esse? Esse magni et quod rem! Qui modi dolores eligendi! Explicabo maxime, non facilis sequi quae atque ex.
                                Obcaecati non dolores enim, numquam, facilis, nisi aperiam nesciunt corporis est eveniet repudiandae quisquam! Dolorem
                                similique adipisci corporis? Harum molestiae illo atque non quisquam fuga expedita consequatur labore a, explicabo est
                                illum veniam in nulla quia dolorum praesentium delectus laborum, blanditiis voluptate, odio porro quam repellendus
                                autem. Eum! Laborum vitae modi rerum, voluptatibus quia consequatur? Dolore maiores exercitationem at doloribus
                                impedit quas officiis, est officia? Aperiam odit non possimus unde illo qui adipisci quae ut sit. Atque,
                                exercitationem. Repellendus aperiam eligendi voluptate impedit odit itaque, cum error nisi molestias doloremque
                                dolorum quasi incidunt nulla architecto sapiente voluptatibus soluta ab beatae rem consequatur minima laborum enim
                                inventore nam? Vitae. Deleniti, ratione officia aliquam corporis voluptas nulla possimus consequatur laboriosam
                                labore, quod eveniet similique! Maiores excepturi ut nulla ratione delectus mollitia provident. Non minima inventore
                                labore ad consequuntur, temporibus hic! Numquam dolorum consequuntur error soluta, totam delectus pariatur, quam odit
                                iste doloremque libero at ratione minima alias quidem mollitia corporis quos architecto nulla. Error obcaecati
                                doloremque reprehenderit quae, earum qui? Fugiat modi facere quam doloremque voluptatem dolorem tempore accusamus
                                voluptatum, neque autem possimus quas maiores voluptas exercitationem quae eaque distinctio suscipit. Consectetur at
                                quod quae eum a dolorum nesciunt soluta.
                            </SheetDescription>
                        </SheetBody>
                    </SheetContent>
                </Sheet>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a verified email to display" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="m@example.com">m@example.com</SelectItem>
                                        <SelectItem value="m@google.com">m@google.com</SelectItem>
                                        <SelectItem value="m@support.com">m@support.com</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>You can manage email addresses in your </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </Stack>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
